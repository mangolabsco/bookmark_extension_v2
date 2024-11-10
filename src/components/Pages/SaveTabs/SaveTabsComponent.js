/* eslint-disable no-undef */
import React from "react";
import { Button } from "react-bootstrap";

const save_tabs_function = async (event) => {
  event.preventDefault();
  chrome.runtime.sendMessage({ action: "save_tabs" }, (response) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    } else if (response && !response.success) {
      console.error(response.error);
    } else {
      console.log("Tabs saved successfully.");
    }
  });
};

const SaveTabsComponent = () => {
  return (
    <>
      <h1>Restore Session from JSON</h1>
      <Button onClick={(e) => save_tabs_function(e)} id="saveTabsButton">
        Save Tabs as JSON
      </Button>
    </>
  );
};

export default SaveTabsComponent;
