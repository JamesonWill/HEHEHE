import React,{useState} from 'react'
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';
import Slider4 from './Slider4';
import Foto1 from "../Image/Photo/1.webp"
import Foto2 from "../Image/Photo/2.webp"
import Foto3 from "../Image/Photo/3.webp"
import Foto4 from "../Image/Photo/4.webp"
import Foto5 from "../Image/Photo/5.png"


const Second = () => {
  const [Mau, setMau] = useState(false);


  return (
    <div className='flex flex-col py-14 text-xl mx-10'>
      <div className='flex justify-center align-middle text-3xl'>
        Hi Cell baca yesss HAHAHAHAH
      </div>
      <div className='flex justify-center align-middle mt-10'>
      HAHAHAHAHA, thanks dah milih yes(ya walaupun pilihannya emang cuman ada dua sihh). Oke jadi kita mulai dari alasan kali ya kenapa gw bisa suka sama lu. Tapi kan kemarin gw dah ngomong kali ya, jadi ya pilih sendiri aja cel mau baca lagi atau gak alasan gw suka sama lu hehehe 🙈.
      </div>
      {Mau === false && 
      <div className='flex justify-center align-middle mt-10' data-aos="fade-right">
          <button onClick={() => setMau(true)} className='bg-blue-400 px-4 py-1 rounded-xl text-2xl'>
          Mau baca alasan
          </button>
          </div>
}
      {Mau === true && 
      <div className='flex justify-center align-middle mt-10'  data-aos="fade-right">
      <img src={Foto1} className='w-5/12 h-5/12'/>
      <div className='mx-4'>
      Oke jadi mau ya, hadeh gw malu ketik ini beneran tapi yaudah lah ya. Oke jadi ya lu dah tahu sendiri lah ya, gw tahu lu suka gw dari kapan. Tapi pas itu gw masih biasa sajaa. Sampe hmmm pas bulan juni ya baru mulai hahahaha. Jadi ya lu sayang keluarga lu, lu gak suka aneh aneh, lu peduli nilai lu, sama lu sangat religius yes. Lu yang awalnya dari SMP ya gak sebebas pas SMA, makanya pas selesai covid semester 1 nilai lu sangat anjlok ya. Tapi setelah semester 1 ya lu tobat, ini sih gacor sih jarang ada yang mau setry hard sih cell. Gw lihat lu dah tahu masalah lu ya, terus ingin memperbaiki (This is nice, kerenn). Terus ya sampe kelas 12 sekarang buktinya nilai lu bagus ya kecuali emng ada bbrp ulangan yang haram sih ini WKWKWKWKWK. Terus gw suka kalo lu tuh peduli your future, ya lu mau FKG UI, ya walaupun jalannya agak susah. Tapi semangat cuy, percaya proses,ada temen lu, keluarga lu, sama gw, bakal support lu yes. Sama jangan lupa banyak banyak berdoa cuy buat ini, Tuhan pasti bakal kasih yang paling baik buat lu juga. Tahu gak sih yang pas itu lu awalnya gak pengan BTA, sebenarnya gw tuh pengen banget lu BTA aja ya tapi pas itu belum deket deket banget jadi, gw takutnya itu bakal buat lu ilfeel jadi yaudah gw biarin aja. Rencannya pas lmyn deket gw suruh lu BTA lagi hahaha, tapi ya 1-2 minggu setelahnya lu mau BTA, mantappp. Ini yang gw sebelumnya itu pas gw belum mulai chat sama lu ya HAHAHAHA. Terus ya dari juni itu kita kan mulai ngechat terus, terus ya rasa sukanya makin tumbuh dehh. Haduh gw ketik ini malu banget aaaaaaa. 
      </div>
      </div>
}
      <div className='flex justify-center align-middle mt-10'  data-aos="fade-right">
      <div className='mx-4'>
      Ya sebagai pacar lu, gw bakal selalu ada di sini buat lu. Terus gw bakal selalu semangatin lu tiap kali lu mau lakuin apa atau ulangan atau tugas, ya intinya gw bakal selalu support dan semangatin lu. Mau lu lagi posisi lagi down banget atau lagi bahagia banget, mau lu lagi bad day atau good day gw bakal selalu support dan di situ buat lu hehe. Ok next, ini kan first time gw pacaran(dan semoga jadi yang terakhir juga🫣), jadi ya maaf kalo gw kadang kadang gak peka atau ada yang kurang gitu. Tapi gw bakal terus berusaha untuk menjadi yang terbaik, jadi seiring berjalannya waktu gw bakal improve yaa. Terus ya cell, kalo lu ada keluhan atau masalah yaa, cerita yess biar kita cari solusi yang terbaik biar masalahnya cepat kelarr. Ya, gak enak cerita ke gw gak papa juga sih, lu ngomong sama temen lu atau keluarga lu juga bisa, atau berdoa kepada Tuhan, intinya jangan tidur pas lu ada masalah itu gak enak cuy. Lalu kalo gw gak balas chat lu dalam 1 jam - 1 jam 30 menit itu cmn ada beberapa kemungkinanan HAHAHAHAHA, itu bisa aja gw lagi fokus belajar banget, trs fokus coding, bikin personal essay(buat kuliah wkwkwkwk), lagi rapat. Tapi tenang aja gw bakal usahain buat ttp bales chat lu, jadi gak ush gak enakan yes. Hmmm tapi gw gak balas chat lebih dari itu artinya gw ketiduran hehe 😅. 
      </div>
      <img src={Foto2} className='w-3/12 h-1/12'/>

      </div>
      <div className='flex justify-center align-middle mt-10'  data-aos="fade-right">
      PAUSEE, istirahat bentar gw gak kuat ketik ini salting cuyy. Lihat gambar bawa bntr yaa (discroll ke kanan). Haduh alay bgt gw, dapet ide gini dari mana coba WILLIE WILLIE. Gw rela main tiktok di website tanpa account demi ini 😭😭😭, gak lagi main tiktok dah capek.
      </div>
      <div className='mt-6'>
        <a className='text-blue-900 font-semibold' target="_blank" href='https://www.tiktok.com/@haycloudy/video/7258880198945344774'>https://www.tiktok.com/@haycloudy/video/7258880198945344774</a>
      </div>
      <div className='mt-6'>
      <a className='text-blue-900 font-semibold' target="_blank" href='https://www.tiktok.com/@anak.baik099/video/7274430198488009989'>https://www.tiktok.com/@anak.baik099/video/7274430198488009989</a>
      </div>
      <div className='mt-6'>
      <a className='text-blue-900 font-semibold' target="_blank" href='https://www.tiktok.com/@deephub05/video/7279314743137963307'>https://www.tiktok.com/@deephub05/video/7279314743137963307</a>
      </div>
      <div className='mt-6'>
      <a className='text-blue-900 font-semibold' target="_blank" href='https://www.tiktok.com/@sofeahumyra/video/7264271676068711712'>https://www.tiktok.com/@sofeahumyra/video/7264271676068711712</a>
      </div>
      <div className='mt-6 flex flex-col'>
        <div>
        Maaf kalo yang ini agak wibu hehe  
        </div>
        <a className='text-blue-900 font-semibold' target="_blank" href='https://www.tiktok.com/@benjamjello/video/7267703859005508870'>https://www.tiktok.com/@benjamjello/video/7267703859005508870</a>
      </div>
      <div className='flex justify-center align-middle mt-10'  data-aos="fade-right">
      <img src={Foto3} className='w-4/12 h-4/12'/>
      <div className='mx-4'>
      Lanjutt, gw ketik ginian beneran bikin muka gw merah dah lahh WKWKWKWKWKWK. Sama ini gw mau lu prioritas tetap yang Tuhan dulu, terus keluarga lu , terus your future/academic ya, baru pacaran hahahahaha. Jadi, gw gak mau jadi penghambat buat lu, maunya bisa jadi support system yang baik buat lu. Terus ya untuk prinsip pacaran gw gak banyak banyak ya, aaa sorry cuy gw rada aneh prinsip prinsip HAHAHAHA. Paling ya, kalo physical touch rangkul, trs pat pat ya yang normal gw bisa lakuin walaupun agak malu, tapi kalo lebih dari itu gw gak bisa soalnya ya itu prinsip gw WKWKWKWKWK, ya walaupun gw tahu lu juga gak bakal lakuin juga soalnya lu gak mau aneh aneh, tapi ya gw ketik aja biar lu tahu gw gak bakal gitu juga hehe. Aaa sorry cuy kalo terlalu alay dah lah, oke next gw tuh pengen, kalo ada yang ngegantung di pikiran lu, gw mau lu ngomong cuy biar gak jadi beban di lu, ya sama sih kayak yang ngomong di paragraf sebelumnya hahahaha. Sama ehmm, kalo gw ada salah atau apa, terus gw gak sadar, ingetin gw dong biar gw bisa memperbaiki agar gak terjadi lagi. Lastt, gw pengen lu jujur cuy, jangan ada rahasia antara kitaa.
      </div>

      </div>
      <div className='flex flex-col justify-center align-middle mt-10'  data-aos="fade-right">
      <img src={Foto4}/>
      <div className='mt-4'>
      Next, jangan takut buat share tentang idol idol lu cuyy, gw bakal siap menghadapinya (contohnya gw dah hadepin itu tiap hari ke ramos hehehe). Ya gw bakal kalo lihat ada bias lu yang lagi live, gw bakal lgsg kasih tahu lu HAHAHAHAHA. Intinya spam gw aja kalo ada bias lu live atau comeback atau apa lah hahahaha. Gw bakal coba inget inget bias lu cuy, hmm yang sejauh ini gw inget cuman mingyu seventeen , jungkook bts, taehyung bts, terus eucha le sserafim, kazuha le sserafim, terus semua new jeans HAHAHAHAHA. Ya seiring berjalannya waktunya bakal inget juga. Jadi intinya lu jadi diri lu sendiri aja yaa hahahaha. Samaa, gw siap lah diisengin lu mulu hahaha, yang penting lu seneng hahahaha. Ya walaupun gw suka sih kalo diisengin lu wkwkwkwkwkw, gw gak pernah ngomong ini sihh. Ya jangan lupa aja ganti wallpaper ipad tiap minggu itu sih. Gw juga siap bikin tiktok sama luu, tapi pls tiktoknya jangan alay alay atau slay itu gw gak bisaaa. Terus ya kita baru bener bener deket 3 bulan lebih, ini terlalu singkat gak sihh, kalo bisa sih selamanya aja ya gakk 🤭 (help muka gw merahh bgt). Sama ini sih, maap kalo sangat alay yaa, gw tahu kalo pacaran biasanya ada fase 4-6 bulan yang banyak yang bilang ini fase yang lumayan berat atau apa lah tapi ya semoga ini gak bakal terjadi di kita. Tapi KALO TERJADI YAAA, banyak yang bilang jarang komuniksi itu yang bakal jadi masalah, cuman gw pikir kita bakal tetap komunikasi tiap hari jadi amann. Jadi paling kita bisa kali jalan jalan ke mana atau coba sesuatu yang baru yes, bikin hobi baru, pergi bersama pas weekend atau apa. Ya intinya hal yang bakal membuat hubungan kita langgeng dan melewati fase itu (SEMOGA GAK TERJADI YA FASE INI). Oke lanjut, kalo lu mau call atau apa langsung kasih tahu aja cuyy, biar lansgung gas dc call hahahahaha. 
      </div>

      </div>
      <div className='flex justify-center align-middle mt-10'  data-aos="fade-right">
      HEHE nyampe juga ke bagian terakhirr, jangan sebarin link website ini dongg wkwkwkwk gw malu gila, website ini hanya untuk lu buat dibaca ajaaa yess. Sama kalo ada kata kata yang aneh atau lu kurang ngerti tolong maklum, ini gw ketik gak gw baca lagi soalnya gw bakal salting sendiri bacanya hehe. Dah ini sedikit quotes alay dikit hehe. 

      </div>
      <div className='flex justify-center align-middle mt-6'  data-aos="fade-right">
      “I never want to stop making memories with you”

      </div>
      <div className='flex justify-center align-middle mt-6'  data-aos="fade-right">
      ““let's help each other to be the best version of ourselves”
”

      </div>
      <div className='flex justify-center align-middle mt-10'  data-aos="fade-right">
        </div>Dahh cell tolong isi form yang terakhir dongg 🥹. Kalo dah selesai lihat websitenya sama isi formnya kasih tahu gw dong HAHAHAHA. 
      <div>
        <div className='flex justify-center align-middle mt-10'>
          <button className='bg-blue-400 px-5 py-2 rounded-xl'>
            <a href='https://forms.gle/pCWMyFyv9y3QTkK27' target='_blank'>
              Isi G formnya dong plss
            </a>
          </button>
        </div>
      </div>

      <div className='flex justify-center align-middle mt-20'  data-aos="fade-right">
      <img src={Foto5} className="w-5/12 h-1/12"/>
      <div className='mx-4'>
      Gg juga gw ketik sebanyak ini hehehe. Dah lah gak kuat gw wkwkwkwkw terlalu maluu. 
      </div>
      </div>
    </div>
  )
}

export default Second