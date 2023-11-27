module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    "location-field": {
      enabled: true,
      config: {
        // You need to enable "Autocomplete API" and "Places API" in your Google Cloud Console
        googleMapsApiKey: env("GoogleMapsApiKey"),
        // See https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
        autocompletionRequestOptions: {
          language: 'en',
        },
      },
    },
    // ...
  });