import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

const Help = () => {
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    if (location.pathname === "/support") { // Replace "/your-specific-route" with your desired route
      var Tawk_API = Tawk_API || {};
      Tawk_API.visitor = {
        name: 'John Doe', // Replace with the visitor's name
      };

      // Tawk.to code
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/64f30999a91e863a5c1134fa/1h9alr0n3";
      // s1.charset = "UTF-8"; // Removing the charset line, as it's deprecated
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);

      // Cleanup function to remove the widget when the component unmounts
      return () => {
        // Remove Tawk.to widget by removing the script element
        s1.parentNode.removeChild(s1);
      };
    }
  }, [location.pathname]); // Add location.pathname as a dependency

  return (
    <>
      {/* Your component content */}
      
    </>
  )
}

export default Help;