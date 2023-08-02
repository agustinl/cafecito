import {
	createStyles,
	Card,
	Avatar,
	Text,
	Group,
	rem,
	Badge,
	Flex,
} from "@mantine/core";
import Link from "next/link";

import { randomNumberGenerator } from "@/helpers/randomNumberGenerator";

const useStyles = createStyles(theme => ({
	card: {
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        height: "100%",
        transitionDuration: ".2s",

        "&:hover": {
			boxShadow: "0 10px 20px 0px rgba(0, 0, 0, 0.1)"
		},
	},

	avatar: {
		border: `${rem(2)} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
		}`,
	},
}));

interface ProfileCardProps {
	image: string;
	avatar: string;
	name: string;
	link: string;
    type: string,
	stats: { label: string; value: string }[];
}

export function ProfileCard(props: ProfileCardProps) {
	const { classes } = useStyles();
	const { image, avatar, name, link, type, stats } = props;

	const items = stats.map(stat => (
		<div key={stat.label}>
			<Text ta="center" fz="md" fw={500}>
				{Math.floor(Math.random() * 200)}
			</Text>
			<Text ta="center" fz="sm" c="dimmed">
				{stat.label}
			</Text>
		</div>
	));

	return (
		<Link href={link} passHref legacyBehavior>
			<Card
				withBorder
				padding="md"
				radius="md"
				component="a"
				className={classes.card}
			>
				<Card.Section
					sx={{
						//backgroundImage: `url(${image})`,
                        //background: `linear-gradient(0deg, #${randomNumberGenerator()}, #${randomNumberGenerator()})`,
						backgroundImage: `url(https://picsum.photos/seed/${randomNumberGenerator()}/200/200)`,
						height: 80,
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
				/>
				<Avatar
					//src={avatar}
                    src={`https://i.pravatar.cc/80?u=${randomNumberGenerator()}`}
					size={80}
					radius={80}
					mx="auto"
					mt={-30}
					className={classes.avatar}
				/>
				<Text ta="center" fz="md" fw={500} mt="sm">
					{name}
				</Text>
				<Flex justify="center" mt="sm">
					<Badge radius="sm" mx="auto">
						{type}
					</Badge>
				</Flex>
				<Group mt="md" position="center" spacing={30}>
					{items}
				</Group>
			</Card>
		</Link>
	);
}
