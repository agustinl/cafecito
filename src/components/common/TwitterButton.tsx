import { Button, ButtonProps } from "@mantine/core";
import { IconBrandTwitterFilled } from "@tabler/icons-react";

const TwitterButton = (props: ButtonProps) => {
	return (
		<Button
            leftIcon={<IconBrandTwitterFilled size={18} color="white" />}
            w="100%"
            color="blue"
			{...props}
		/>
	);
};

export default TwitterButton;
