import { Button, ButtonProps } from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";

const InstagramButton = (props: ButtonProps) => {
	return (
		<Button
            leftIcon={<IconBrandInstagram size={18} color="white" />}
            w="100%"
            style={{
                background: "linear-gradient(90deg, #fdf497, #fd5949,#d6249f,#285AEB)"
            }}
			{...props}
		/>
	);
};

export default InstagramButton;
