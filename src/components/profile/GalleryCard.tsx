import {
	Card,
	Text,
	Group,
	createStyles,
	getStylesRef,
	rem,
} from "@mantine/core";

import { randomNumberGenerator } from "@/helpers/randomNumberGenerator";

const useStyles = createStyles(theme => ({
	card: {
		position: "relative",
		height: rem(280),
        width: "100%",
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[6]
				: theme.colors.gray[0],

		[`&:hover .${getStylesRef("image")}`]: {
			transform: "scale(1.03)",
		},
	},

	image: {
		...theme.fn.cover(),
		ref: getStylesRef("image"),
		backgroundSize: "cover",
		transition: "transform 500ms ease",
	},

	overlay: {
		position: "absolute",
		top: "20%",
		left: 0,
		right: 0,
		bottom: 0,
		backgroundImage:
			"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
	},

	content: {
		height: "100%",
		position: "relative",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		zIndex: 1,
	},

	title: {
		color: theme.white,
		marginBottom: rem(5),
	},

	bodyText: {
		color: theme.colors.dark[2],
		marginLeft: rem(7),
	},

	author: {
		color: theme.colors.dark[2],
	},
}));

interface GalleryCardProps {
	title: string;
	image: string;
	privated: boolean;
}

const GalleryCard = ({ title, image, privated }: GalleryCardProps) => {
	const { classes } = useStyles();
	return (
		<Card
			p="lg"
			shadow="lg"
			className={classes.card}
			radius="md"
			component="a"
			//href={link}
			target="_blank"
		>
			<div
				className={classes.image}
				//style={{ backgroundImage: `url(${image})` }}
				style={{ backgroundImage: `url(https://picsum.photos/seed/${randomNumberGenerator()}/280/280)` }}
			/>
			<div className={classes.overlay} />

			<div className={classes.content}>
				<div>
					{/* <Text size="lg" className={classes.title} weight={500}>
						{title}
					</Text> */}

					<Group position="apart" spacing="xs">
						<Text size="sm" className={classes.author}>
							{title}
						</Text>
					</Group>
				</div>
			</div>
		</Card>
	);
};

export default GalleryCard;
