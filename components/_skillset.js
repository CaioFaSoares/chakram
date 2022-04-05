import { IoLogoReact, SiFlutter, SiSwift, SiGit, SiSemver } from 'react-icons/io5'
import { SiSketch, CgFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign } from 'react-icons/io5'
import { SiJavascript, FaSwift, SiC,  SiPython,} from 'react-icons/io5'
import { IoBatteryDead, IoBatteryHalf, IoBatteryFull, IoBatteryCharging} from 'react-icons/io5'
import { HiOutlineDotsVertical } from 'react-icons/io5'

export const GrafSkillSet = [
    {
        skill: "Photoshop",
        icon: <SiAdobephotoshop/>,
        level: <IoBatteryCharging/>
      },
      {
        skill: "Illustrator",
        icon: <SiAdobeillustrator/>,
        level: <IoBatteryFull/>
      },
      {
        skill: "InDesign",
        icon: <SiAdobeindesign/>,
        level: <IoBatteryHalf/>
      },
        {
            skill: "",
            icon: <HiOutlineDotsVertical/>,
            level: ""
        },
      {
        skill: "Figma",
        icon: <CgFigma/>,
        level: <IoBatteryFull/>
      },
      {
        skill: "Sketch",
        icon: <SiSketch/>,
        level: <IoBatteryFull/>
      },
]

export const DevSkillSet = [
    {
        skill: "React",
        icon: <IoLogoReact/>,
        level: <IoBatteryHalf/>
    },
    {
        skill: "Flutter",
        icon: <SiFlutter/>,
        level: <IoBatteryHalf/>
    },
    {
        skill: "SwiftUI",
        icon: <SiSwift/>,
        level: <IoBatteryHalf/>
    },
    {
        skill: "",
        icon: <HiOutlineDotsVertical/>,
        level: ""
    },
    {
        skill: "JavaScript",
        icon: <SiJavascript/>,
        level: <IoBatteryHalf/>
    },
    {
        skill: "Swift",
        icon: <FaSwift/>,
        level: <IoBatteryHalf/>
    },
    {
        skill: "C",
        icon: <SiC/>,
        level: <IoBatteryHalf/>
    },
    {
        skill: "Python",
        icon: <SiPython/>,
        level: <IoBatteryDead/>
    },
  ]

export const ToolSkillSet = [
    {
        skill: "Git",
        icon: <SiGit/>,
        level: <IoBatteryHalf/>
    },
    {
        skill: "Semver",
        icon: <SiSemver/>,
        level: <IoBatteryDead/>
    },
]