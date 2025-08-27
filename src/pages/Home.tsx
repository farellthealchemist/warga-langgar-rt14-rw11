import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-primary via-red-light to-white-pure">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <span className="text-6xl animate-bounce">🎉</span>
              <span className="text-8xl">🇮🇩</span>
              <span className="text-6xl animate-bounce delay-300">🎉</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              HUT RI ke-80
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow-md">
              Meriahkan Hari Kemerdekaan!
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-8 inline-block">
              <p className="text-lg font-semibold text-white">
                🏠 Warga Langgar RT 14 RW 11
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                <Link to="/lomba">
                  <Trophy className="mr-2 h-5 w-5" />
                  Lihat Daftar Lomba
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 backdrop-blur-sm">
                <Link to="/pendaftaran">
                  <Users className="mr-2 h-5 w-5" />
                  Daftar Sekarang
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-lg font-semibold mb-2">Tanggal Acara</h3>
                <p className="text-muted-foreground">17 Agustus 2025</p>
                <p className="text-muted-foreground text-sm">Hari Kemerdekaan RI</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-lg font-semibold mb-2">Lokasi</h3>
                <p className="text-muted-foreground">Lapangan RT 14</p>
                <p className="text-muted-foreground text-sm">RW 11 Langgar</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold mb-2">Total Lomba</h3>
                <p className="text-muted-foreground">6 Jenis Lomba</p>
                <p className="text-muted-foreground text-sm">Tradisional 17 Agustus</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Competitions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lomba Favorit 🎯
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ikuti lomba-lomba seru tradisional Indonesia yang penuh kegembiraan dan semangat kemerdekaan!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured competition cards */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🏃‍♂️</div>
                <h3 className="text-xl font-semibold mb-2">Balap Karung</h3>
                <p className="text-muted-foreground text-sm">Lomba paling seru dan menghibur!</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🪢</div>
                <h3 className="text-xl font-semibold mb-2">Tarik Tambang</h3>
                <p className="text-muted-foreground text-sm">Uji kekuatan dan kekompakan tim!</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🌴</div>
                <h3 className="text-xl font-semibold mb-2">Panjat Pinang</h3>
                <p className="text-muted-foreground text-sm">Tantangan yang menguji keberanian!</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/lomba">
                Lihat Semua Lomba →
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};