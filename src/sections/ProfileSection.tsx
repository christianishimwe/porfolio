import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="min-h-screen flex items-center flex-col md:flex-row gap-8 md:gap-16">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hi, I'm Your Name</h1>
        <p className="text-xl mb-2">
          I'm <span className="text-blue-600 font-semibold">{/* Typewriter here */}a developer</span> passionate about building beautiful web experiences.
        </p>
        <p className="text-gray-600 dark:text-gray-400">Short intro about yourself goes here. You can mention your background, interests, or goals.</p>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          width={200}
          height={200}
          className="rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
      </div>
    </section>
  );
}
