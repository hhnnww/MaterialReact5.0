import { Box, Button, Stack, TextField } from "@mui/material";
import { useRef } from "react";
import { DefaultService } from "~/client";

export function Component() {
	const md_text = useRef<HTMLTextAreaElement>();
	return (
		<>
			<Stack spacing={2} direction={"column"} justifyContent={"flex-start"}>
				<TextField multiline label="链接内容" rows={20} inputRef={md_text} />
				<Box>
					<Button
						variant="contained"
						onClick={() => {
							DefaultService.openBaiduLinkOpenBaiduLinkOpenLinkPost({
								md_text: md_text.current?.value as string,
							});
						}}
					>
						打开
					</Button>
				</Box>
			</Stack>
		</>
	);
}
