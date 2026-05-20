import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

export default function HomeScreen() {
  const features = [
    {
      title: "Laporan Cepat",
      desc: "Kirim laporan hanya dalam hitungan detik",
      icon: "flash",
    },
    {
      title: "Data Aman",
      desc: "Data terenkripsi dan aman",
      icon: "shield-checkmark",
    },
    {
      title: "Tracking",
      desc: "Pantau laporan realtime",
      icon: "stats-chart",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.badge}>
          Platform Pengaduan Modern
        </Text>

        <Text style={styles.title}>
          Suarakan{"\n"}
          <Text style={styles.blue}>
            Keluhan Anda
          </Text>
        </Text>

        <Text style={styles.desc}>
          Platform modern untuk membantu masyarakat
          melaporkan masalah publik secara cepat,
          aman, dan transparan.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Buat Laporan
          </Text>
        </TouchableOpacity>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200",
          }}
          style={styles.image}
        />
      </View>

      {/* FEATURES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Fitur Unggulan
        </Text>

        {features.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.iconBox}>
              <Ionicons
                name={item.icon as any}
                size={28}
                color="#fff"
              />
            </View>

            <Text style={styles.cardTitle}>
              {item.title}
            </Text>

            <Text style={styles.cardDesc}>
              {item.desc}
            </Text>
          </View>
        ))}
      </View>

      {/* STATS */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            12K+
          </Text>
          <Text style={styles.statLabel}>
            Laporan
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            9K+
          </Text>
          <Text style={styles.statLabel}>
            Selesai
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            98%
          </Text>
          <Text style={styles.statLabel}>
            Kepuasan
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            24/7
          </Text>
          <Text style={styles.statLabel}>
            Online
          </Text>
        </View>
      </View>

      {/* CTA */}
      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>
          Mari Bangun Kota Lebih Baik
        </Text>

        <Text style={styles.ctaDesc}>
          Gunakan platform pengaduan digital
          untuk meningkatkan pelayanan publik.
        </Text>

        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>
            Mulai Sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F9FF",
  },

  hero: {
    padding: 24,
    paddingTop: 70,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#DBEAFE",
    color: "#1D4ED8",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    fontWeight: "700",
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: "900",
    color: "#111827",
    lineHeight: 50,
  },

  blue: {
    color: "#06B6D4",
  },

  desc: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 28,
    color: "#6B7280",
  },

  button: {
    marginTop: 28,
    backgroundColor: "#2563EB",
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },

  image: {
    width: "100%",
    height: 260,
    borderRadius: 30,
    marginTop: 30,
  },

  section: {
    padding: 24,
  },

  sectionTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#111827",
    marginBottom: 24,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 24,
    marginBottom: 20,
  },

  iconBox: {
    width: 60,
    height: 60,
    backgroundColor: "#2563EB",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
  },

  cardDesc: {
    marginTop: 10,
    color: "#6B7280",
    lineHeight: 24,
  },

  statsContainer: {
    paddingHorizontal: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  statCard: {
    width: "47%",
    backgroundColor: "#2563EB",
    borderRadius: 28,
    paddingVertical: 30,
    marginBottom: 18,
    alignItems: "center",
  },

  statNumber: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "900",
  },

  statLabel: {
    marginTop: 10,
    color: "#DBEAFE",
    fontSize: 16,
  },

  cta: {
    margin: 24,
    backgroundColor: "#06B6D4",
    borderRadius: 32,
    padding: 30,
    alignItems: "center",
  },

  ctaTitle: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
  },

  ctaDesc: {
    marginTop: 16,
    color: "#E0F2FE",
    textAlign: "center",
    lineHeight: 26,
  },

  ctaButton: {
    marginTop: 24,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 20,
  },

  ctaButtonText: {
    color: "#2563EB",
    fontWeight: "800",
    fontSize: 16,
  },
});