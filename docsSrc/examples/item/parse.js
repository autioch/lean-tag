const decimalsCount = 3;

function parseSource(source) {
  const serialized = source.toString().split('\n');
  const extracted = serialized.slice(1, -1);

  extracted[0] = extracted[0].replace('return ', '');

  return extracted.map((line) => line.replace(/^ {4}/, '')).join('\n');
}

function parsePerformance(start, end) {
  const duration = end - start;

  return duration.toFixed(decimalsCount);
}

module.exports = function parse({ description, source, expects }) {
  const speedTestStart = performance.now();
  const result = source();
  const resultHTML = result.outerHTML;
  const speedTestEnd = performance.now();

  const isValid = resultHTML === expects;

  return {
    description,
    source: parseSource(source),
    resultHTML,
    expects,
    isValid,
    result,
    duration: parsePerformance(speedTestStart, speedTestEnd)
  };
};
