import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { lombaData } from "@/data/lomba";
import { Clock, Users, Trophy } from "lucide-react";

export const Lomba = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-4xl">🏆</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Daftar Lomba</h1>
            <span className="text-4xl">🎉</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ikuti berbagai lomba tradisional Indonesia yang seru dan menghibur dalam rangka memperingati HUT RI ke-80!
          </p>
        </div>

        {/* Competition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {lombaData.map((lomba, index) => (
            <Card 
              key={lomba.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {lomba.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {lomba.nama}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {lomba.deskripsi}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{lomba.waktu}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Kategori: {lomba.kategori}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Badge 
                    variant={lomba.kategori === "Tim" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {lomba.kategori}
                  </Badge>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <Link to="/pendaftaran">
                      Daftar
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-red-primary to-red-light rounded-2xl p-8 text-white">
          <div className="mb-4">
            <span className="text-4xl">🎯</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Siap Untuk Berkompetisi?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Daftarkan diri Anda sekarang dan rasakan keseruan lomba tradisional Indonesia! 
            Menangkan hadiah menarik dan banggakan lingkungan RT 14 RW 11.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold"
            asChild
          >
            <Link to="/pendaftaran">
              <Trophy className="mr-2 h-5 w-5" />
              Daftar Sekarang Juga!
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};