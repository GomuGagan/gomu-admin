import "./widgetSm.css";
import Avtar from "../../images/avtar.jpg";
import {Visibility} from "@mui/icons-material"

const WidgetSm = () => {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={Avtar} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">afafa</span>
                    <span className="widgetSmUserTitle">Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Avtar} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">afafa</span>
                    <span className="widgetSmUserTitle">Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Avtar} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">afafa</span>
                    <span className="widgetSmUserTitle">Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Avtar} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">afafa</span>
                    <span className="widgetSmUserTitle">Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Avtar} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">afafa</span>
                    <span className="widgetSmUserTitle">Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon "/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm