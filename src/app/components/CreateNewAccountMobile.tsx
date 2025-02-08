import Button from "./Button";
import whatsapp from "./../assets/whatsapp.svg";
import manMobile from "./../assets/man-mobile.svg";
import Link from "next/link";

const CreateNewAccountMobile: React.FC = () => {
  return (
    <section className="flex relative flex-col px-8 pt-16 pb-80 w-full mt-10 aspect-[0.571]">
      <img
        loading="lazy"
        src={manMobile.src}
        alt=""
        className="object-cover absolute inset-0 size-full rounded-3xl"
      />
      <div className="flex relative flex-col justify-center items-center py-8 mb-0 bg-[#10C78F]">
        <h1 className="text-3xl font-semibold leading-8 text-center">
          Quero criar minha conta na Pague Safe agora mesmo.
        </h1>
        <div className="flex flex-col justify-center items-center mt-4 text-sm font-bold gap-2">
          <Link href="https://app.zelify.online/register" passHref>
            <Button className="flex gap-2 justify-center bg-[#EFFFFA] hover:bg-[#EFFFFA]/90 items-center px-6 py-3.5 text-sm font-bold rounded-xl max-md:px-5">
              <span className="self-stretch my-auto">Criar conta agora</span>
            </Button>
          </Link>
          <div>
            <span className="self-stretch hidden sm:inline my-auto font-bold">
              ou
            </span>
          </div>
          <Link
            href="https://api.whatsapp.com/send?phone=551196665-3854&text=Ol%C3%A1,%20estou%20interessado%20em%20criar%20uma%20conta..."
            passHref
          >
            <Button className="flex gap-2 justify-center bg-[#EFFFFA] hover:bg-[#EFFFFA]/90 items-center px-6 py-3.5 text-sm font-bold rounded-xl max-md:px-5">
              <img
                loading="lazy"
                src={whatsapp.src}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="self-stretch my-auto">Entre em contato</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CreateNewAccountMobile;
