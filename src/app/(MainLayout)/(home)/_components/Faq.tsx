"use client";

import Container from "@/components/shared/Container";
import React, { useState, useEffect } from "react";
// @ts-ignore
import Faq from "react-faq-component";


 
type FaqRowOption = {
  expand: () => void;
  close: () => void;
};

const FaqSection = () => {
  // Explicitly set the type of 'rows' as an array of FaqRowOption objects
  const [rows, setRowsOption] = useState<FaqRowOption[] | null>(null);

  useEffect(() => {
    if (rows) {
      // Open the first question initially
      setTimeout(() => {
        rows[0].expand();
      }, 250); // Adjust the delay as needed
    }
  }, [rows]);

  const data = {
    title: "FAQ ",
    rows: [
      {
        title: "What is DocTicket and how does it work?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "How can I book an appointment through DocTicket?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Are there any discounts available for treatments?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim.`,
      },
      {
        title:
          "Can hospitals and doctors rent operation theaters through DocTicket?",
        content: <p>current version is 1.2.1</p>,
      },

      {
        title: "Is my personal information safe with DocTicket?",
        content: <p>current version is 1.2.1</p>,
      },
    ],
  };

  const styles = {
    titleTextColor: "black",
    titleTextSize: "48px",
    rowTitleColor: "black",
    rowTitleTextSize: "20px",
    rowContentTextSize: "16px",
    rowContentPaddingTop: "12px",
    rowContentPaddingBottom: "16px",
    rowContentPaddingLeft: "40px",
    arrowColor: "black",
    transitionDuration: "1s",
    timingFunc: "ease",
  };

  const config = {
    animate: true,
    arrowIcon: "V",
    expandIcon: "+",
    collapseIcon: "-",
    tabFocus: true,
  };

  return (
    <div className="my-12">
      <Container>
        <Faq
          data={data}
          styles={styles}
          config={config}
          getRowOptions={setRowsOption} // Get row options to manage the FAQ
        />
      </Container>
    </div>
  );
};

export default FaqSection;
