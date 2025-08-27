import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { lombaData } from "@/data/lomba";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, Calendar, Trophy } from "lucide-react";

export const Pendaftaran = () => {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    usia: "",
    lomba: "",
    nomorHP: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.namaLengkap || !formData.usia || !formData.lomba || !formData.nomorHP) {
      toast({
        title: "Formulir Belum Lengkap",
        description: "Mohon lengkapi semua field yang tersedia.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Pendaftaran Berhasil! 🎉",
      description: `Terima kasih ${formData.namaLengkap}! Anda telah terdaftar untuk lomba ${formData.lomba}. Panitia akan menghubungi Anda segera.`,
      variant: "default"
    });

    // Reset form
    setFormData({
      namaLengkap: "",
      usia: "",
      lomba: "",
      nomorHP: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen py-12 bg-gray-warm">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-4xl">📝</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Pendaftaran</h1>
            <span className="text-4xl">🎯</span>
          </div>
          <p className="text-muted-foreground text-lg">
            Daftarkan diri Anda untuk mengikuti lomba HUT RI ke-80!
          </p>
        </div>

        {/* Registration Form */}
        <Card className="shadow-xl border-0 bg-white">
          <CardHeader className="text-center bg-gradient-to-r from-red-primary to-red-light text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold">
              🇮🇩 Form Pendaftaran Lomba 17 Agustus
            </CardTitle>
            <p className="text-white/90">Warga Langgar RT 14 RW 11</p>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama Lengkap */}
              <div className="space-y-2">
                <Label htmlFor="namaLengkap" className="text-base font-medium flex items-center">
                  <User className="h-4 w-4 mr-2 text-primary" />
                  Nama Lengkap
                </Label>
                <Input
                  id="namaLengkap"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={formData.namaLengkap}
                  onChange={(e) => handleInputChange("namaLengkap", e.target.value)}
                  className="h-12 text-base"
                />
              </div>

              {/* Usia */}
              <div className="space-y-2">
                <Label htmlFor="usia" className="text-base font-medium flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  Usia
                </Label>
                <Input
                  id="usia"
                  type="number"
                  placeholder="Masukkan usia Anda"
                  value={formData.usia}
                  onChange={(e) => handleInputChange("usia", e.target.value)}
                  className="h-12 text-base"
                  min="5"
                  max="100"
                />
              </div>

              {/* Pilih Lomba */}
              <div className="space-y-2">
                <Label className="text-base font-medium flex items-center">
                  <Trophy className="h-4 w-4 mr-2 text-primary" />
                  Lomba yang Diikuti
                </Label>
                <Select onValueChange={(value) => handleInputChange("lomba", value)} value={formData.lomba}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Pilih lomba yang ingin diikuti" />
                  </SelectTrigger>
                  <SelectContent>
                    {lombaData.map((lomba) => (
                      <SelectItem key={lomba.id} value={lomba.nama}>
                        <div className="flex items-center space-x-2">
                          <span>{lomba.icon}</span>
                          <span>{lomba.nama}</span>
                          <span className="text-xs text-muted-foreground">({lomba.kategori})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Nomor HP */}
              <div className="space-y-2">
                <Label htmlFor="nomorHP" className="text-base font-medium flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  Nomor HP/WhatsApp
                </Label>
                <Input
                  id="nomorHP"
                  type="tel"
                  placeholder="Contoh: 081234567890"
                  value={formData.nomorHP}
                  onChange={(e) => handleInputChange("nomorHP", e.target.value)}
                  className="h-12 text-base"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-red-primary to-red-light hover:from-red-dark hover:to-red-primary transition-all duration-300"
              >
                🎉 Daftar Sekarang!
              </Button>
            </form>

            {/* Info Box */}
            <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold text-accent mb-2 flex items-center">
                <span className="mr-2">ℹ️</span>
                Informasi Penting
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Pendaftaran gratis untuk semua warga RT 14 RW 11</li>
                <li>• Satu orang bisa mengikuti maksimal 2 lomba</li>
                <li>• Konfirmasi pendaftaran akan dikirim via WhatsApp</li>
                <li>• Acara dimulai pukul 08:00 WIB di Lapangan RT 14</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};