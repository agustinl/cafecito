import {
	createStyles,
	Card,
	Avatar,
	Text,
	Group,
	Button,
	rem,
	Spoiler,
    Badge,
    Flex
} from "@mantine/core";
import Link from "next/link";
import { randomNumberGenerator } from "@/helpers/randomNumberGenerator";

const useStyles = createStyles(theme => ({
	card: {
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
	},

	avatar: {
		border: `${rem(2)} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
		}`,
	},
}));

interface TestimonialsCardProps {
	image: string;
	avatar: string;
	name: string;
	text: string;
	type: string;
    link: string;
	stats: { label: string; value: string }[];
};

export function Testimonial(props: TestimonialsCardProps) {
	const { classes } = useStyles();
	const { image, avatar, name, text, type, stats, link } = props;

	const items = stats.map(stat => (
		<div key={stat.label}>
			<Text ta="center" fz="lg" fw={500}>
				{Math.floor(Math.random() * 300)}
			</Text>
			<Text ta="center" fz="sm" c="dimmed">
				{stat.label}
			</Text>
		</div>
	));

	return (
		<Card withBorder padding="xl" radius="md" className={classes.card}>
			<Card.Section
				sx={{
					//backgroundImage: `url(${image})`,
                    //background: `linear-gradient(0deg, #${randomNumberGenerator()}, #${randomNumberGenerator()})`,
					backgroundImage: `url(https://picsum.photos/seed/${randomNumberGenerator()}/400/400)`,
					height: 140,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
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
			<Text ta="center" fz="lg" fw={500} mt="sm">
				{name}
			</Text>
            <Flex justify="center" mt="sm">
                <Badge radius="sm" mx="auto">{type}</Badge>
            </Flex>
			<Text ta="center" fz="sm" c="dimmed" mt={20}>
				<Spoiler
					maxHeight={110}
					showLabel="Más..."
					hideLabel="Menos"
				>
					{text}
				</Spoiler>
			</Text>
			<Group mt="md" position="center" spacing={30}>
				{items}
			</Group>
            <Link href={link} passHref legacyBehavior>
                <Button fullWidth mt="md" component="a">
                    Ver perfil
                </Button>
			</Link>
		</Card>
	);
}
