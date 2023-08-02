import { Button, ButtonProps } from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";

const GoogleButton = (props: ButtonProps) => {
	return (
		<Button
			leftIcon={<IconBrandGoogle size={18} />}
            w="100%"
			variant="default"
			color="gray"
			{...props}
		/>
	);
};

export default GoogleButton;
