import { createStyles, Box, Text, Group, rem, Flex } from "@mantine/core";
import { IconListSearch } from "@tabler/icons-react";

const LINK_HEIGHT = 38;
const INDICATOR_SIZE = 10;
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2;

const useStyles = createStyles(theme => ({
	link: {
		...theme.fn.focusStyles(),
		display: "block",
		textDecoration: "none",
		color:
			theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
		lineHeight: rem(LINK_HEIGHT),
		fontSize: theme.fontSizes.sm,
		height: rem(LINK_HEIGHT),
		borderTopRightRadius: theme.radius.sm,
		borderBottomRightRadius: theme.radius.sm,
		borderLeft: `${rem(2)} solid ${
			theme.colorScheme === "dark"
				? theme.colors.dark[4]
				: theme.colors.gray[2]
		}`,
        cursor: "pointer",

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	linkActive: {
		fontWeight: 500,
		color: theme.colors[theme.primaryColor][
			theme.colorScheme === "dark" ? 3 : 7
		],
	},

	links: {
		position: "relative",
	},

	indicator: {
		transition: "transform 150ms ease",
		border: `${rem(2)} solid ${
			theme.colors[theme.primaryColor][
				theme.colorScheme === "dark" ? 3 : 7
			]
		}`,
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		height: rem(INDICATOR_SIZE),
		width: rem(INDICATOR_SIZE),
		borderRadius: rem(INDICATOR_SIZE),
		position: "absolute",
		left: `calc(-${rem(INDICATOR_SIZE)} / 2 + ${rem(1)})`,
	},
}));

interface ExploreSectionsProps {
	sections: {
		name: string;
		link: string;
		icon: JSX.Element;
	}[],    
	handleOnClick: Function;
	active: number;
}

const ExploreSections = ({ sections, handleOnClick, active }: ExploreSectionsProps) => {
	const { classes, cx } = useStyles();

	const items = sections.map((item, index) => (
		<Box
			onClick={() => handleOnClick(index)}
			key={item.name}
			className={cx(classes.link, {
				[classes.linkActive]: active === index,
			})}
		>
			<Flex gap={10} align="center" ml={10}>
				{item.icon}
				{item.name}
			</Flex>
		</Box>
	));

	return (
		<div>
			<Group mb="md">
				<IconListSearch size="1.1rem" stroke={1.5} />
				<Text>Secciones</Text>
			</Group>
			<div className={classes.links}>
				<div
					className={classes.indicator}
					style={{
						transform: `translateY(${rem(
							active * LINK_HEIGHT + INDICATOR_OFFSET
						)})`,
					}}
				/>
				{items}
			</div>
		</div>
	);
};

export default ExploreSections;
