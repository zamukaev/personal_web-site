import { NextPage } from "next";
import LegalNoticePage from "@/components/legalNoticePage/LegalNoticePage";



interface indexProps {
    className?: string;
}

const LegalNotice: NextPage<indexProps> = (props) => {
    const { className } = props;

    return (<LegalNoticePage />);
}

export default LegalNotice;