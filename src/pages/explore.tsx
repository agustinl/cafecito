import { useState } from "react";
import {
	Paper,
	Title,
	Flex,
	TextInput,
	Button,
	Divider,
	Grid,
} from "@mantine/core";
import ExploreSections from "@/components/common/ExploreSections";
import { IconSearch } from "@tabler/icons-react";
import { ProfileCard } from "@/components/common/ProfileCard";

import fakeSections from "@/data/fakeSections";
import fakeExplore from "@/data/fakeExplore";

const Explore = () => {
	const [activeSection, setActiveSection] = useState(0);

    const handleActiveSection = (sectionIndex: number) => {
        setActiveSection(sectionIndex);
    };

	return (
		<section>
			<Flex gap={20} align="flex-start">
				<Flex direction="column" w="20%">
                    <ExploreSections
                        sections={fakeSections}
                        handleOnClick={handleActiveSection}
                        active={activeSection}
                    />
				</Flex>

				<Divider orientation="vertical" />

				<Flex w="100%" direction="column">
					<Paper
						shadow="lg"
						p="md"
						withBorder
						mx="auto"
						component="section"
						w="100%"
					>
						<Flex gap={20}>
							<TextInput
								icon={<IconSearch size="0.8rem" />}
								w="100%"
							/>
							<Button>Buscar</Button>
						</Flex>
					</Paper>

                    <Title order={2} mb={20} mt={50}>{fakeSections[activeSection]?.name}</Title>

					<Grid>
						{fakeExplore?.map((data, i) => (
							<Grid.Col key={i} span={3}>
								<ProfileCard {...data} />
							</Grid.Col>
						))}
					</Grid>
				</Flex>
			</Flex>
		</section>
	);
};

export default Explore;
