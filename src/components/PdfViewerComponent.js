import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current; // This `useRef` instance will render the PDF.

    let PSPDFKit, instance;
    
    (async function () {
      PSPDFKit = await import("pspdfkit");

      PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.

      // eslint-disable-next-line no-unused-vars
      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        document: props.document, 
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        //get rid of toolbar
        hideToolbar: true
      });
    })();
    
    return () => PSPDFKit && PSPDFKit.unload(container);
  }, [props.document]);
  
  // This div element will render the document to the DOM.
  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
