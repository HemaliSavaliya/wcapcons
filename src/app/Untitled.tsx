import axios from "axios";
import { Key, useEffect, useRef, useState } from "react";
import { apiURL, imageURL } from "../../components/Utile/urls";
import Dropdown from "../../components/Dropdown";
import { Editor } from "@tinymce/tinymce-react";

interface cmsItemPro {
	description: String;
	cmsType: String;
}

interface CmsTitle {
	cmsId: number; // Adjust the type according to your data structure
	cmsType: string;
  }
  
  
  const CmsList = () => {
	  const [cmsItem, setCmsItem] = useState<cmsItemPro>(null);
	  const [updateItem, setUpdateItem] = useState([]);
	  // Inside your component:
	  const [cmsTitle, setTitleItem] = useState<CmsTitle[]>([]); // Make sure it's properly typed
	const [editId, editIdSet] = useState(0);
	const editorRef = useRef<any>(null);
	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	};
	const handleChange = (e: any) => {
		const { name, value } = e.target;
	};
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(`${apiURL}/CMS/CMSType`);
			setTitleItem(response.data.data);
		};
		fetchData();
		return () => {};
	}, []);

	const fetchDataById = async (id: any) => {
		editIdSet(id);
		const response = await axios.get(`${apiURL}/CMS/ByCMSId?id=${id}`);
		let bresponse = response.data.success ? response.data.data : null;
		if (bresponse != null) {
			setCmsItem(bresponse);
			cmsItem.description = response.data.data.description;
		}
		console.log(cmsItem);
	};

	const updateCms = () => {
		const update = async () => {
			try {
				const token = localStorage.getItem("aAuthToken");

				if (token) {
					const config = {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					};
					var updateItem = {
						CMSId: editId,
						CMSType: cmsItem.cmsType,
						Description: editorRef.current.getContent(),
						status: "Active",
					};
					const res = await axios.put(
						`${apiURL}/CMS/Update`,
						updateItem,
						config,
					);
				} else {
					console.error("No token available");
				}
			} catch (err) {
				console.error("Error fetching data", err);
			}
		};

		update();
	};
	const onTitleChange = (e: any) => {
		fetchDataById(e.target.value);
	};

	return (
		<>
			<div className='panel'>
				<div className='max-w-[70vw] rounded-[7px] mx-auto p-9 bg-[#ffffff]'>
					<div className='border-b-1'>
						<p className='text-[20px] '>CMS Details</p>
					</div>
					<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
						<div className='sm:col-span-3'>
							<label
								htmlFor='Title'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Title
							</label>
							<div className='mt-2'>
								<select
									id='CMSType'
									name='CMSType'
									className='form-select flex-1'
									onChange={(e) => onTitleChange(e)}>
									{cmsTitle.map((option) => (
										<option
											key={option}
											value={option.cmsId}>
											{" "}
											{option.cmsType}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='sm:col-span-3'></div>
						<div className='sm:col-span-3'>
							<label
								htmlFor='Details'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Details
							</label>
							<div className='mt-2'>
								{/* <textarea
                                name="description"
                                id="description"
                                value={cmsItem?.description}
                                defaultValue={cmsItem?.description}
                                onChange={handleChange} 
                                rows={10}
                                className="px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                /> */}
								<Editor
									apiKey='lriza5lwyy3j5wr1obqoir4q97ve9note8806lulf5agv0gl'
									onInit={(_evt: any, editor: any) =>
										(editorRef.current = editor)
									}
									initialValue={cmsItem?.description}
									init={{
										statusbar: false,
										height: 500,
										menubar: false,
										id: "description",
										name: "description",
										plugins: [
											"advlist",
											"autolink",
											"lists",
											"link",
											"image",
											"charmap",
											"preview",
											"anchor",
											"searchreplace",
											"visualblocks",
											"code",
											"fullscreen",
											"insertdatetime",
											"media",
											"table",
											"code",
											"help",
											"wordcount",
										],
										toolbar:
											"undo redo | blocks | " +
											"bold italic forecolor | alignleft aligncenter " +
											"alignright alignjustify | bullist numlist outdent indent | " +
											"removeformat | help",
										content_style:
											"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
									}}
								/>
							</div>
						</div>
						<div className='sm:col-span-6 flex flex-row justify-between'>
							<div className='flex flex-row gap-2'>
								<button
									type='button'
									onClick={updateCms}
									className='btn btn-primary btn-sm m-1'>
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CmsList;
