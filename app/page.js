/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "./firebase/config";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        router.push("/dashboard");
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <>
      {" "}
      <div className="home">
        <Navbar user={user} />
        <main className="main">
          <div className="hero">
            <div className="content">
              <h1 className="title">Welcome to RecipeRack!</h1>
              <p className="subtitle">
                Your personal inventory management solution.
              </p>
              <p className="description">
                "Streamline your pantry management with our app's powerful
                features. From organizing your kitchen to managing a large
                inventory, we've got everything you need to keep your pantry in
                perfect order."
              </p>
              <div className="features">
                <div className="feature">
                  <h2 className="featureTitle">Inventory Tracking</h2>
                  <p className="featureDescription">
                    "Effortlessly manage your pantry items. Quickly add, remove,
                    and update your inventory with ease."
                  </p>
                </div>
                <div className="feature">
                  <h2 className="featureTitle">Pop up Notifications</h2>
                  <p className="featureDescription">
                    "Stay ahead of your inventory with smart alerts. Get
                    notified when items are running low or it's time to
                    restock."{" "}
                  </p>
                </div>
              </div>
              <div className="features">
                <div className="feature">
                  <h2 className="featureTitle">Export PDF</h2>
                  <p className="featureDescription">
                    "Effortlessly manage your pantry with RecipeRack. Keep track
                    of your items, generate a detailed pantry list, and export
                    it as a PDF for convenient access anytime, anywhere."
                  </p>
                </div>
                <div className="feature">
                  <h2 className="featureTitle">Data Analysis</h2>
                  <p className="featureDescription">
                    "Gain insights into your pantry with detailed charts and
                    graphs. Visualize inventory trends through pie charts and
                    bar graphs, helping you make informed decisions about
                    restocking and usage."
                  </p>
                </div>
                <div className="feature">
                  <h2 className="featureTitle">Recipe Suggestions</h2>
                  <p className="featureDescription">
                    "Unlock delicious recipes made from the items already in
                    your pantry. Sign up to discover three personalized recipes
                    tailored just for you."
                  </p>
                </div>
                <div className="feature">
                  <h2 className="featureTitle">View User Profile</h2>
                  <p className="featureDescription">
                    "Personalize your pantry management experience by accessing
                    and updating your user profile. Keep your information
                    current for a more customized and seamless experience."{" "}
                  </p>
                </div>
              </div>
              <p className="description">
                "Ready to dive in? Sign in with your Google account to access
                your personalized dashboard and start managing your pantry with
                ease."
              </p>
            </div>
          </div>
        </main>
      </div>{" "}
      <ToastContainer />
    </>
  );
};

export default Home;
