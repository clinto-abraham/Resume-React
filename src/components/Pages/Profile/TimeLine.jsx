import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

// const TimeLine = () => {
//   return (
//     <div>
//       <div className="timeline">
//         <div className="container left">
//           <div className="content">
//             <h2>2017</h2>
//             <p>
//               Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
//               admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
//               quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
//               iusto primis ea eam.
//             </p>
//           </div>
//         </div>
//         <div className="container right">
//           <div className="content">
//             <h2>2016</h2>
//             <p>
//               Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
//               admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
//               quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
//               iusto primis ea eam.
//             </p>
//           </div>
//         </div>
//         <div className="container left">
//           <div className="content">
//             <h2>2015</h2>
//             <p>
//               Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
//               admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
//               quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
//               iusto primis ea eam.
//             </p>
//           </div>
//         </div>
//         <div className="container right">
//           <div className="content">
//             <h2>2012</h2>
//             <p>
//               Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
//               admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
//               quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
//               iusto primis ea eam.
//             </p>
//           </div>
//         </div>
//         <div className="container left">
//           <div className="content">
//             <h2>2011</h2>
//             <p>
//               Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
//               admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
//               quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
//               iusto primis ea eam.
//             </p>
//           </div>
//         </div>
//         <div className="container right">
//           <div className="content">
//             <h2>2007</h2>
//             <p>
//               Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
//               admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
//               quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
//               iusto primis ea eam.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeLine;
