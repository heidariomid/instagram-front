import * as filestack from 'filestack-js';

export const client = filestack.init('AncOrYkrcRkll1kf2xYZ8z');

export const uploadPhotoHandler = async (uploadPhoto) => {
	const options = {
		// maxFiles: 20,
		uploadInBackground: false,

		onUploadDone: async (res) => {
			const file = await res?.filesUploaded[0]?.url;

			uploadPhoto({variables: {file, caption: 'files #awesome'}});
		},
	};
	await client.picker(options).open();
};
