import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;
  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy to clipboard");         
      }
    } else {
      toast.error("Clipboard access not available");      
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
      onDoubleClick={saveToClipBoard}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">`#${hex}`</p>
    </article>
  );
};

export default SingleColor;
