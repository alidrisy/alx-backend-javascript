interface MajorCredits {
  credits: number;
  type: 'major';
}

interface MinorCredits {
  credits: number;
  type: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, type: "major" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, type: "minor" };
}
