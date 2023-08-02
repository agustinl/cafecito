import { Button, ButtonProps } from "@mantine/core";
import { IconCopy } from "@tabler/icons-react";

const CopyButton = (props: ButtonProps) => {
	return (
		<Button
            leftIcon={<IconCopy size={18} color="white" />}
            w="100%"
			{...props}
		/>
	);
};

export default CopyButton;
