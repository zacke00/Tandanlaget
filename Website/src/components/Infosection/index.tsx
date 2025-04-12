import {
    ShieldCheck,
    Cpu,
    Users,
    MessageSquare,
    AlertTriangle,
    Heart,
    ClipboardCheck,
    Sparkles,
    Calendar,
  } from "lucide-react";
  const infoItems = [
    {
      title: "Trygg behandling",
      text: "Vi fokuserar på patientens komfort och trygghet genom hela processen.",
      icon: ShieldCheck,
    },
    {
      title: "Modern utrustning",
      text: "Vi använder den senaste tandvårdsteknologin för bästa möjliga resultat.",
      icon: Cpu,
    },
    {
      title: "Erfaret team",
      text: "Vårt erfarna team är engagerat i att ge dig högkvalitativ vård med ett leende.",
      icon: Users,
    },
    {
      title: "Individuell rådgivning",
      text: "Vi tar oss tid att förstå dina behov och skapa en personlig behandlingsplan.",
      icon: MessageSquare,
    },
    {
      title: "Akuttandvård",
      text: "Vi erbjuder snabb hjälp vid akuta besvär – du är i trygga händer.",
      icon: AlertTriangle,
    },
    {
      title: "Smärtfri behandling",
      text: "Med moderna metoder ser vi till att din behandling blir så smärtfri som möjligt.",
      icon: Heart,
    },
    {
      title: "Förebyggande vård",
      text: "Vi hjälper dig att förebygga problem genom regelbundna kontroller och god munhygien.",
      icon: ClipboardCheck,
    },
    {
      title: "Estetisk tandvård",
      text: "Från tandblekning till skalfasader – vi hjälper dig att få det leende du drömmer om.",
      icon: Sparkles,
    },
    {
      title: "Enkel bokning",
      text: "Boka tid online eller via telefon – smidigt och enkelt för dig.",
      icon: Calendar,
    },
  ];
  
  const InfoSection = () => {
    return (
      <section className="py-16 px-4 w-full bg-white z-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          {infoItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center w-full max-w-[500px] bg-white rounded-xl shadow-md z-2 border border-black/10 p-6 gap-6 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#5d4fff]/10">
                  <Icon className="w-8 h-8 text-[#5d4fff]" />
                </div>
  
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-[#00579E] mb-1">{item.title}</h3>
                  <p className="text-black/70 text-sm">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  };
  export default InfoSection;
  