import { Flex, Button, Title, Divider, Text, Paper } from "@mantine/core";
import ProfileHeader from "@/components/profile/ProfileHeader";

import fakeUser from "@/data/fakeUser";

const ProfilePlans = () => {
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
				{fakeUser?.plans?.map(plan => (
					<Paper p="md" withBorder mx="auto" w="50%" key={plan?._id}>
						<Flex direction="column" gap={20}>
							<Title order={4}>{plan?.title}</Title>
							<Divider />
							<Text c="dimmed" fz={14}>
								{plan?.description}
							</Text>

							<div>
								<Text ta="center" fz="xl" fw={600} color="green">
									AR$ {plan?.price}
								</Text>
								<Text ta="center" fz="sm" c="dimmed">
									Pago único
								</Text>
								<Text
									ta="center"
									fz="xs"
									c="dimmed"
									fs="italic"
								>
									No se renueva mensualmente
								</Text>
							</div>
							<Divider />

							<Flex align="center" justify="space-between">
								<Text fz={14}>
									Contenido del plan:{" "}
									<b>{plan?.countPosts} publicaciones</b>
								</Text>
								<Button>Comprar plan</Button>
							</Flex>
						</Flex>
					</Paper>
				))}
			</Flex>
		</ProfileHeader>
	);
};

export default ProfilePlans;
