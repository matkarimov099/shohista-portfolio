import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#09090b",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)",
        backgroundSize: "100px 100px",
      }}
    >
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)",
          display: "flex",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {/* Initials */}
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            marginBottom: 30,
            boxShadow: "0 0 60px rgba(139, 92, 246, 0.4)",
            border: "4px solid #8b5cf6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#8b5cf6",
            fontSize: 56,
            fontWeight: 700,
            color: "white",
          }}
        >
          KS
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            margin: 0,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Komilova Shohista
        </h1>

        {/* Title */}
        <p
          style={{
            fontSize: 32,
            color: "#8b5cf6",
            margin: 0,
            marginBottom: 30,
          }}
        >
          English Teacher
        </p>

        {/* Specializations */}
        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          {["IELTS", "CEFR", "General English", "Business English"].map(
            (spec) => (
              <div
                key={spec}
                style={{
                  padding: "8px 20px",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "white",
                  fontSize: 18,
                }}
              >
                {spec}
              </div>
            ),
          )}
        </div>

        {/* Location */}
        <p
          style={{
            fontSize: 20,
            color: "#888",
            marginTop: 30,
          }}
        >
          Urgench, Uzbekistan
        </p>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
