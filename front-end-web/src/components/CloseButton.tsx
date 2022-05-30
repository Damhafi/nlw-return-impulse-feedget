import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton(){
    return(
        <Popover.Button className='top-5 right-5 absolute text-zinc-200 hover:text-violet-700' title="fechar formulário de feedback">
            <X className="h-4 w-4" weight="bold"/>
        </Popover.Button>

    )
}