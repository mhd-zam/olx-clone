import { ThreeCircles } from "react-loader-spinner";
import "../spinner/spinner.css";
function Loading() {
  return (
    <div className="parentdiv">
    <ThreeCircles
  height="100"
  width="100"
  color="#472183"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor="#4B56D2"
  innerCircleColor="#82C3EC"
  middleCircleColor="#D0B8A8"
/>
      <h6 className="loadtext">Loading....</h6>
    </div>
  );
}
export default Loading;
