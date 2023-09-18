import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { FaRegFaceSmileBeam } from 'react-icons/fa6'
import TestimonialWithImage from "./components/Testimonial/TestimonialWithImage"
import TestimonialWithoutImage from "./components/Testimonial/TestimonialWithoutImage"

function App() {

	return (
		<>
			{/* TESTIMONIAL COMPONENT */}
			<TestimonialWithImage 
				imageSrc="./portrait-image-default.png"
				authorName="May Andersons"
				authorRole="Workcation, CTO"
			>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, corporis. Esse doloribus, aliquam suscipit ipsam est excepturi, dolore, ipsa deleniti eum accusamus eveniet? Tempora, odit.
			</ TestimonialWithImage>
			<br />
			<TestimonialWithoutImage />

			
			
			
			
			{/* CARD COMPONENT */}
			{/*
			<Card 
				title="default icon"
			/>
			<br />
			<Card 
				title="Easy Deployment" 
				text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit modi consequatur iste illum." 
				icon={<AiOutlineCloudUpload />}
				iconBgColor="#3F75FE"
				iconColor="#fff"
			/>
			<br />
			<Card 
				title="Happy day :-)" 
				text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit modi consequatur iste illum." 
				icon={<FaRegFaceSmileBeam />}
				iconBgColor="#ECFDF5"
				iconColor="#047857"
			/>
			*/}


			{/* BANNER COMPONENT */}
			{/*
			<Banner title="What a beautiful world!" size="lg" text="Everything is functioning." status="success"/>
			<br />
			<Banner title="Be careful!" size="sm" text="This looks a bit dangerous." status="warning"/>
			<br />
			<Banner title="Oh shit!" size="md" text="We´re fucked up :-(" status="error"/>
			<br />
			<Banner title="Do you want an info?" size="sm" status="neutral"/>
			*/}


			{/* BADGE COMPONENT */}
			{/*<Badge color="green" variant="pill" size="lg">Hello World!</Badge>*/}


			{/* MENU COMPONENT */}
			{/*<Menu onOpen={() => console.log("Opened/closed")}>
				<Menu.Button>Menu</Menu.Button>
				<Menu.Dropdown>
					<Menu.Item>Home</Menu.Item>
					<Menu.Item>About</Menu.Item>
					<Menu.Item>Contact</Menu.Item>
					<Menu.Item>Blog</Menu.Item>
				</Menu.Dropdown>
			</Menu>*/}


			{/* STAR COMPONENT */}
			{/*<Star />*/}
		</>
	)
}

export default App
