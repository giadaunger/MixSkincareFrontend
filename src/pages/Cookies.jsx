import React, { useEffect } from 'react'

function Cookies() {

  useEffect(() => {  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="w-11/12 sm:w-2/3 mx-auto mt-10 mb-10">
      <h2 className="text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10 text-[#E2A3B7] text-center mt-10">Cookie Policy</h2>
      <p><strong>Last updated:</strong> 2025</p>

      <p>
        At MIX Skincare, we respect your privacy and are committed to being transparent about how
        we collect and use your data. This Cookie Policy explains how cookies and similar
        technologies are used on our website, including our use of Google Analytics, in accordance
        with privacy laws across Europe, the United Kingdom, the United States, Canada and South Asia.
      </p>

      <h3 className="text-2xl font-semibold mt-12">1. What Are Cookies?</h3>
      <p>
        Cookies are small text files placed on your device when you visit a website. They are widely
        used to make websites function properly, enhance user experience and provide information
        to website owners.
      </p>
      <p>Cookies may be:</p>
      <ul className="list-disc ml-6">
        <li>First-party cookies, which are set directly by our website</li>
        <li>Third-party cookies, which are set by services we use, such as Google Analytics</li>
      </ul>
      <p>
        Some cookies are session-based, meaning they are deleted when you close your browser.
        Others are persistent, meaning they remain stored on your device until they expire or are
        deleted manually.
      </p>

      <h3 className="text-2xl font-semibold mt-12">2. How We Use Cookies</h3>
      <ul className="list-disc ml-6">
        <li>Operate and improve the performance of our website</li>
        <li>Analyse how visitors use our website</li>
        <li>Remember your preferences, such as region and language</li>
        <li>Provide a personalised experience</li>
      </ul>
      <p>
        We do not use cookies to collect personally identifiable information without your explicit
        consent.
      </p>

      <h3 className="text-2xl font-semibold mt-12">3. Google Analytics</h3>
      <p>
        We use Google Analytics, a web analytics service provided by Google LLC, to collect
        information about how visitors interact with our site. This helps us understand usage patterns
        and improve functionality.
      </p>
      <p>Information collected may include:</p>
      <ul className="list-disc ml-6">
        <li>An anonymised version of your IP address (in compliance with GDPR for users in the EU and UK)</li>
        <li>Device type, browser type and operating system</li>
        <li>Pages visited and time spent on each page</li>
        <li>Referring websites and general location (not precise GPS data)</li>
      </ul>
      <p>
        We have enabled IP anonymisation for users in Europe to ensure compliance with data
        protection laws. Google processes this data on our behalf and may store it on servers
        located in the United States and other countries. For more information, please visit:
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> How Google uses data when you use our partners’ sites</a>.
      </p>

      <h3 className="text-2xl font-semibold mt-12">4. Consent and Cookie Settings</h3>
      <p>
        When you first visit MIX Skincare, you will see a banner requesting your consent to use
        non-essential cookies, such as those for analytics. You may:
      </p>
      <ul className="list-disc ml-6">
        <li>Accept all cookies</li>
        <li>Reject non-essential cookies</li>
        <li>Customise your cookie preferences</li>
      </ul>
      <p>
        You can change or withdraw your consent at any time by accessing the Cookie Settings link
        at the bottom of our website.
      </p>

      <h3 className="text-2xl font-semibold mt-12">5. Managing Cookies in Your Browser</h3>
      <p>
        You may also manage or disable cookies through your browser settings. Most browsers
        allow you to:
      </p>
      <ul className="list-disc ml-6">
        <li>View which cookies are stored</li>
        <li>Delete existing cookies</li>
        <li>Block certain cookies</li>
        <li>Set preferences for different types of cookies</li>
      </ul>
      <p>
        Please note that disabling cookies may affect how the website functions or limit certain
        features.
      </p>
      <p className="italic">Useful links for managing cookies:</p>
      <ul className="list-disc ml-6">
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/en-gb/HT201265" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Microsoft Edge</a></li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12">6. International Compliance</h3>
      <p>
        We aim to comply with the following data protection and privacy laws:
      </p>
      <ul className="list-disc ml-6">
        <li>General Data Protection Regulation (GDPR) – European Union and United Kingdom</li>
        <li>California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) – United States</li>
        <li>Personal Information Protection and Electronic Documents Act (PIPEDA) – Canada</li>
        <li>Relevant national privacy laws in South Asia</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12">7. Updates to This Policy</h3>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in legal requirements
        or how we use cookies. When we do, we will update the "Last updated" date at the top of
        this page.
      </p>

      <h3 className="text-2xl font-semibold mt-12">8. Contact Us</h3>
      <p>
        If you have any questions about this policy or how we use cookies, you can contact us using
        the information below:
      </p>
      <ul className="list-disc ml-6">
        <li>Email: info@mixskincare.com</li>
        <li>Website: 
          <a href="https://mixskincare.beauty/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">mixskincare.beauty</a>
        </li>
      </ul>
    </div>
  )
}

export default Cookies
