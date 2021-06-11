module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET')
    },
    actionOptions: {
      upload: {
        folder:'storybox'
      }
    }
  },
  'instagram-feed': {
		username: 'storybox_places',
    count: 20,
		fields: {
			shortcode: true,
			owner_id: true,
			date: true,
			comment_count: true,
			like_count: true,
			is_video: true,
			text: true,
			display_url: true,
			thumbnail: true,
			thumbnail_150x150: true,
			thumbnail_240x240: true,
			thumbnail_320x320: true,
			thumbnail_480x480: true,
			thumbnail_640x640: true,
		}
	}
})
