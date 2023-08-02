
import { Modal, Button, Flex, TextInput } from "@mantine/core";

import TwitterButton from "../common/TwitterButton";
import InstagramButton from "../common/InstagramButton";
import CopyButton from "../common/CopyButton";

interface ShareModalProps {
	open: boolean;
	close: () => void;
	text: string;
    title: string;
};

const ShareModal = ({ open, close, text, title }: ShareModalProps) => {

	return (
		<>
			<Modal size="auto" opened={open} onClose={close} title={title}>
                <TextInput
                    value={text}
                />

                <Flex gap={10} mt={20}>
                    <TwitterButton>Twitter</TwitterButton>
                    <InstagramButton>Instagram story</InstagramButton>
                    <CopyButton>Copiar link</CopyButton>
                </Flex>
			</Modal>
		</>
	);
}
 
export default ShareModal;