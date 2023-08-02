import { Grid } from "@mantine/core";
import GalleryCard from "@/components/profile/GalleryCard";
import ProfileHeader from "@/components/profile/ProfileHeader";

import fakeUser from "@/data/fakeUser";

const ProfileGallery = () => {
	return (
		<ProfileHeader
			banner={fakeUser?.user?.image?.banner}
			avatar={fakeUser?.user?.image?.profile}
			name={fakeUser?.user?.name}
			categories={fakeUser?.user?.categories}
		>
			<Grid
				gutter="xs"
				mt={50}
				justify="center"
				align="flex-start"
				w="100%"
			>
				{fakeUser?.imagesGallery?.map(image => (
					<Grid.Col span={4} key={image._id}>
						<GalleryCard {...image} />
					</Grid.Col>
				))}
			</Grid>
		</ProfileHeader>
	);
};

export default ProfileGallery;
