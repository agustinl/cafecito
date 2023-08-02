import { Tabs as MantineTabs } from "@mantine/core";
import { useRouter } from "next/router";
import {
	IconUser,
	IconMessage2,
	IconPhoto,
	IconReportMoney,
} from "@tabler/icons-react";

const Tabs = () => {
	const router = useRouter();
	const { user } = router.query;

	return (
		<MantineTabs
            variant="outline"
			defaultValue="/"
			w="100%"
			value={router.query.activeTab as string}
			onTabChange={value => router.push({
                pathname: `/${user}/${value}`,
                query: {
                    activeTab: value
                }
            }, `/${user}/${value}`)}
		>
			<MantineTabs.List position="center">
				<MantineTabs.Tab
					value="/"
					icon={<IconUser size="1.1em" />}
				>
					Perfil
				</MantineTabs.Tab>
				<MantineTabs.Tab
					value="gallery"
					icon={<IconPhoto size="1.1em" />}
				>
					Galería
				</MantineTabs.Tab>
				<MantineTabs.Tab
					value="posts"
					icon={<IconMessage2 size="1.1em" />}
				>
					Posts
				</MantineTabs.Tab>
				<MantineTabs.Tab
					value="plans"
					icon={<IconReportMoney size="1.1em" />}
				>
					Planes
				</MantineTabs.Tab>
			</MantineTabs.List>
		</MantineTabs>
	);
};

export default Tabs;
