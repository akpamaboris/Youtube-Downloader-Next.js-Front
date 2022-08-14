import { useState } from "react";

function FormDownload() {
  const [inputValue, setInputValue] = useState("");

  function sendDataToServer() {
    window.location.href = `https://youtube-downloader-back-akpama.herokuapp.com/download?URL=${inputValue}`;
    setInputValue("");
  }

  return (
    <div className="bg-red-100 min-h-[100px] mt-10 ml-auto mr-auto max-w-[1250px] flex">
      <form
        className="w-[60%] ml-auto flex mr-auto mt-auto mb-auto bg-blue-500"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          className="basis-auto w-[70%]"
          type="text"
          placeholder="Enter Youtube URL"
          value={inputValue}
          onChange={function (e) {
            setInputValue(e.target.value);
          }}
        />
        <button className="basis-auto w-[30%]" onClick={sendDataToServer}>
          Convert
        </button>
      </form>
    </div>
  );
}
export default FormDownload;
