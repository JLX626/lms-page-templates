/* Tealium/Adobe Analytics Setup Library for SAC Secure / Schwab Advisor University */
function setupAnalytics() {
  'use strict';

  // Set the environment
  var waEnvld = 'DEV';
  if (document.location.href.indexOf('https://schwabadvisoruniversity.csod.com') !== -1) {
    waEnvld = 'PROD';
  }

  // Set the report suite based on the environment
  var scatAccounts = {
    'DEV': 'cschwabadvisorservicesuat',
    'ACPT': 'cschwabadvisorservicesuat',
    'PROD': 'cschwabadvisorservicesprod'
  };
  var sc_report_suite = scatAccounts[waEnvld] || 'cschwabadvisorservicesuat';

  // Set the page name
  var waPageName = '/riaedcenter/tdtransition_hub_home';

  // Set the utag data object
  var utag_data = {
    'sc_report_suite': sc_report_suite,
    'sc_server': 'metric.schwabinstitutional.com',
    'sc_serversecure': 'smetric.schwabinstitutional.com',
    'env_id': waEnvld,
    'page_name': waPageName,
    'page_path': document.location.pathname,
    'page_category': '/si2/schwabadvisoruniversity',
    'page_multi_level_category': document.location.pathname,
    'success_event_id': '2'
  };

  // Set the utag library path
  var utaglibPath = '//tags.tiqcdn.com/utag/schwab/sac-secure/' + (waEnvld === 'PROD' ? 'prod' : 'qa') + '/utag.js';

  // Insert the utag library into the DOM
  var d = document,
      js = d.createElement('script'),
      fjs = d.getElementsByTagName('script')[0];
  js.async = true;
  js.src = utaglibPath;
  js.type = 'text/javascript';
  fjs.parentNode.insertBefore(js, fjs);
}

// Call the function
setupAnalytics();