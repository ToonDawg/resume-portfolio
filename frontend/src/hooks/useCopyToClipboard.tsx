import { useState, useCallback, useEffect } from "react";
import { message } from "antd";

type UseCopyToClipboard = [boolean, () => Promise<void>];

const useCopyToClipboard = (text: string): UseCopyToClipboard => {
    const [copied, setCopied] = useState<boolean>(false);

    const copy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            message.success("Copied to clipboard");
        } catch (err) {
            console.error("Failed to copy text: ", err);
            setCopied(false);
            message.error("Failed to copy text");
        }
    }, [text]);

    useEffect(() => {
        const timer = setTimeout(() => setCopied(false), 3000);
        return () => clearTimeout(timer);
    }, [copied]);

    return [copied, copy];
};

export default useCopyToClipboard;
