'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiEdit, FiChevronDown, FiTrash, FiShare, FiPlusSquare } from "react-icons/fi";
import "./StaggeredDropDown.css"; // Import the StaggeredDropDown.css file
import { RiRobot2Line } from "react-icons/ri";
import { GrAchievement } from "react-icons/gr";
import { MdComputer } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { TbHexagonLetterE } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <div className="container">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="sd-button"
        >
          <span className="font-large text-lg tracking-widest">Events</span>
          <motion.span animate={open ? { rotate: 180 } : { rotate: 0 }} className="sd-chevron">
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="sd-options"
        >
          <motion.li variants={itemVariants} className="sd-option">
          <MdComputer />
            <span>Hackathons</span>
          </motion.li>
          <motion.li variants={itemVariants} className="sd-option">
          <FaCartArrowDown />
            <span>Workshops</span>
          </motion.li>
          <motion.li variants={itemVariants} className="sd-option">
          <TbHexagonLetterE />
            <span>Exhibitions</span>
          </motion.li>
          <motion.li variants={itemVariants} className="sd-option">
          <IoPeople />
            <span>Talk Shows</span>
          </motion.li>
          <motion.li variants={itemVariants} className="sd-option">
          <GrAchievement />
            <span>Competitions</span>
          </motion.li>
          <motion.li variants={itemVariants} className="sd-option">
            <RiRobot2Line />
            <span>Robowars</span>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default StaggeredDropDown;
