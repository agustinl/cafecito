import { ReactNode } from "react";
import { useRouter } from "next/router";
import {
	createStyles,
	Card,
	Avatar,
	rem,
	Badge,
	Flex,
	Title,
	ActionIcon,
} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import Tabs from "@/components/common/Tabs";
import ShareModal from "../modals/ShareModal";

import {
    IconShare,
} from "@tabler/icons-react";

import fakeSections from "@/data/fakeSections";
import { randomNumberGenerator } from "@/helpers/randomNumberGenerator";

const useStyles = createStyles(theme => ({
	card: {
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		height: "100%",
	},

	avatar: {
		border: `${rem(4)} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
		}`,
	},
}));

interface ProfileHeaderProps {
	children: ReactNode,
    banner: string,
    avatar: string,
    name: string,
    categories: number[]
}

const ProfileHeader = ({
    children,
    banner,
    avatar,
    name,
    categories
}: ProfileHeaderProps) => {
	const router = useRouter();
	const { classes } = useStyles();
    const [opened, { open, close }] = useDisclosure(false);
	const { user } = router.query;

	return (
		<Card
			padding="md"
			radius="md"
			className={classes.card}
			h="100%"
			pb={50}
		>
			<Card.Section
				sx={{
					//backgroundImage: `url(${banner})`,
					backgroundImage: `url(https://picsum.photos/seed/${randomNumberGenerator()}/860/200)`,
					height: 200,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					borderRadius: 10,
				}}
			/>
			<Avatar
				//src={avatar}
				src={`https://i.pravatar.cc/150?u=${randomNumberGenerator()}`}
				size={150}
				radius={150}
				mx="auto"
				mt={-80}
				className={classes.avatar}
			/>
			<Flex
				justify="center"
				my={20}
				direction="column"
				align="center"
				gap={10}
			>
				<Title order={1}>{name}</Title>
				<Flex gap={10} align="center">
                    <Badge radius="sm" mx="auto">
                        {fakeSections[categories[0]]?.name}
                    </Badge>
                                            
                    <ActionIcon color="violet" variant="transparent" onClick={open}>
                        <IconShare size="1.125rem" />
                    </ActionIcon>
                </Flex>
			</Flex>
            
            <Tabs />

			{children}

            <ShareModal
                open={opened}
                close={close}
                title="Compartir"
                text={`https://cafecito.app/${user}`}
            />
		</Card>
	);
};

export default ProfileHeader;
