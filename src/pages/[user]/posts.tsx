import { Flex, Spoiler, Title, Divider, Text, Paper, Image } from "@mantine/core";
import ProfileHeader from "@/components/profile/ProfileHeader";

import fakeUser from "@/data/fakeUser";

import { randomNumberGenerator } from "@/helpers/randomNumberGenerator";

const ProfilePosts = () => {
	return (
		<ProfileHeader
			banner={fakeUser?.user?.image?.banner}
			avatar={fakeUser?.user?.image?.profile}
			name={fakeUser?.user?.name}
			categories={fakeUser?.user?.categories}
		>
			<Flex
				mt={50}
				justify="center"
				align="flex-start"
				direction="column"
				gap={20}
			>
				{fakeUser?.posts?.map(plan => (
					<Paper p="md" withBorder mx="auto" w="50%" key={plan?._id}>
						<Flex direction="column" gap={20}>
							<Title order={4}>{plan?.title}</Title>
							<Divider />
                            <Text c="dimmed" fz={14}>
                                <Spoiler
                                    maxHeight={110}
                                    showLabel="Más..."
                                    hideLabel="Menos"
                                >
								    {plan?.description}
                                </Spoiler>
                            </Text>

							<Image
                                mx="auto"
                                radius="md"
                                src={`https://picsum.photos/seed/${randomNumberGenerator()}/600/280`}
                                alt={plan?.title}
                                withPlaceholder 
                            />
						</Flex>
					</Paper>
				))}
			</Flex>
		</ProfileHeader>
	);
};

export default ProfilePosts;
