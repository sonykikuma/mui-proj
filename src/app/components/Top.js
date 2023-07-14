import Button from "@mui/material/Button";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";

const categories = [
  "Agency Lead Generation |",
  "Consulting |",
  "Ecourse |",
  "Events |",
  "Featured |",
  "Health |",
  "Landing Pages |",
  "Lead Generation |",
  "Medical |",
  "Webinar |",
  "Wordpress",
];

const Top = () => {
  return (
    <div className="flex px-2 items-center justify-between mt-10 sm:ml-20">
      <div>
        <h2 className="uppercase text-md">Multor</h2>
        <p className=" mt-4">
          Schedule more virtual appointments, online classes, and video
          consultations with this high-converting lead capture template.
        </p>
        <Button
          variant="contained"
          className="uppercase bg-orange-600 text-white mt-4 hidden md:visible"
        >
          make it yours
        </Button>
      </div>
      <div className="">
        <h2 className="uppercase text-md">category</h2>
        <p className="text-sm">
          Agency Lead Generation | Consulting | Ecourse | Events | Featured |
          Health | Landing Pages | Lead Generation | Medical |Webinar |Wordpress
        </p>
        <p className="md:flex hidden">
          {" "}
          Desktop view <DesktopMacOutlinedIcon className="text-blue-600" />
        </p>
      </div>
    </div>
  );
};
export default Top;
