import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialIcons = () => {
  const icons = [
    {
      icon: (
        <FacebookIcon className="text-blue-900 hover:bg-blue-400 duration-300 text-3xl" />
      ),
      link: "https://facebook.com",
    },
    {
      icon: <InstagramIcon className="text-red-900 hover:bg-red-400" />,
      link: "https://instagram.com",
    },
    {
      icon: <WhatsAppIcon className="text-green-900 hover:bg-green-400" />,
      link: "https://whatsapp.com",
    },
    {
      icon: (
        <GitHubIcon className="text-white hover:bg-white hover:text-black" />
      ),
      link: "https://github.com",
    },
  ];

  const handleIconClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      {icons.map((item, index) => (
        <span
          key={index}
          className="p-2 cursor-pointer inline-flex items-center"
          onClick={() => handleIconClick(item.link)}
        >
          {item.icon}
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
