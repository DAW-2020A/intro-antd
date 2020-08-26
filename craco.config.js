const CracoLessPlugin = require( 'craco-less' );

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#162737', // primary color for all components
              '@link-color': '#153756', // link color
              '@success-color': '#121d0a', // success state color
              '@warning-color': '#7fab66', // warning state color
              '@error-color': '#69494b', // error state color
              '@font-size-base': '14px', // major text font size
              '@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
              '@text-color': 'rgb(43,75,186)', // major text color
              '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
              '@disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
              '@border-radius-base': '2px', // major border radius
              '@border-color-base': '#d9d9d9', // major border color
              '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)' // major shadow for layers
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
